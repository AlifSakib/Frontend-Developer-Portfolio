#!/usr/bin/env python3
"""
SMUCT Result Checker
Query CGPA results from Shanto-Mariam University of Creative Technology
"""

import requests
from bs4 import BeautifulSoup
import sys
import json
from typing import Optional

# Department codes and names
DEPARTMENTS = {
    "cum_ammt": "B.A (Hons) in Apparel Manufacturing Management & Technology",
    "cum_fdt": "B.A(Hons) in Fashion Design & Technology",
    "cum_ia_fa": "Bachelor of Fine Arts(Hons) / Interior Architecture / Architecture",
    "cum_gdm": "B.A(Hons) in Graphic Design & Multimedia",
    "bba_cum_res": "Bachelor of Business Administration (BBA)",
    "mba_cum_res": "Master of Business Administration (MBA)",
    "cum_llb": "Honours/Master of Laws [LL.B/LL.M]",
    "cum_mus": "B. Music / M. Music / Dance",
    "cum_eng": "Honours/Master of Arts in English",
    "cum_ban": "Honours/Master of Arts in Bangla",
    "cum_gov": "MSS/BSS(Hons) in Government & Politics",
    "cum_soa": "MSS/BSS(Hons) in Sociology & Anthropology",
    "cum_is": "Honours/Master in Islamic Studies",
    "cum_cse": "B.Sc(Hons.) in Computer Science & Engineering",
    "cum_bed": "Bachelor of Education (B.Ed)",
}

RESULT_URL = "https://www.smuct.ac.bd/result/final-result.php"


def query_result(department_code: str, student_id: str) -> dict:
    """
    Query CGPA result for a student.
    
    Args:
        department_code: Department code (e.g., 'cum_cse')
        student_id: Student ID number
        
    Returns:
        Dictionary with result data or error message
    """
    data = {
        "fa_code": department_code,
        "batch": "",  # Not required for CGPA results
        "formid": student_id,
    }
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Content-Type": "application/x-www-form-urlencoded",
        "Referer": "https://www.smuct.ac.bd/result/index.php",
    }
    
    try:
        response = requests.post(RESULT_URL, data=data, headers=headers, timeout=30)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, "html.parser")
        
        # Check for access denied
        access_denied = soup.find("div", class_="Accessdenied")
        if access_denied:
            return {"status": "error", "message": "ID Not Found"}
        
        # Check for student info
        student_info = soup.find("div", class_="studentInfo")
        if student_info:
            return {
                "status": "success",
                "html": response.text,
                "text": student_info.get_text(strip=True, separator="\n"),
            }
        
        # Try to extract any table data
        tables = soup.find_all("table")
        if tables:
            result_text = []
            for table in tables:
                result_text.append(table.get_text(strip=True, separator=" | "))
            return {
                "status": "success",
                "html": response.text,
                "text": "\n".join(result_text),
            }
        
        # Return raw text if nothing else works
        return {
            "status": "unknown",
            "html": response.text,
            "text": soup.get_text(strip=True, separator="\n"),
        }
        
    except requests.exceptions.RequestException as e:
        return {"status": "error", "message": f"Request failed: {str(e)}"}


def print_departments():
    """Print all available departments."""
    print("\n📋 Available Departments:")
    print("-" * 60)
    for code, name in DEPARTMENTS.items():
        print(f"  {code:20s} → {name}")
    print()


def main():
    if len(sys.argv) < 2:
        print("🎓 SMUCT Result Checker")
        print("=" * 40)
        print("\nUsage:")
        print("  python smuct_result_checker.py list              # List departments")
        print("  python smuct_result_checker.py <dept> <id>       # Query result")
        print("\nExamples:")
        print("  python smuct_result_checker.py cum_cse 12345")
        print("  python smuct_result_checker.py bba_cum_res 67890")
        sys.exit(1)
    
    command = sys.argv[1]
    
    if command == "list":
        print_departments()
        return
    
    if len(sys.argv) < 3:
        print("❌ Error: Student ID required")
        print("Usage: python smuct_result_checker.py <department_code> <student_id>")
        sys.exit(1)
    
    dept_code = command
    student_id = sys.argv[2]
    
    # Validate department code
    if dept_code not in DEPARTMENTS:
        print(f"❌ Error: Unknown department code '{dept_code}'")
        print("Run 'python smuct_result_checker.py list' to see available departments")
        sys.exit(1)
    
    dept_name = DEPARTMENTS[dept_code]
    print(f"\n🔍 Querying result for:")
    print(f"   Department: {dept_name}")
    print(f"   Student ID: {student_id}")
    print(f"   Code: {dept_code}")
    print("-" * 50)
    
    result = query_result(dept_code, student_id)
    
    if result["status"] == "error":
        print(f"❌ {result['message']}")
    elif result["status"] == "success":
        print("✅ Result Found!")
        print("-" * 50)
        print(result["text"])
        print("-" * 50)
        
        # Save HTML for inspection
        filename = f"result_{student_id}.html"
        with open(filename, "w", encoding="utf-8") as f:
            f.write(result["html"])
        print(f"\n💾 Full HTML saved to: {filename}")
    else:
        print("⚠️ Unexpected response:")
        print(result["text"][:500])


if __name__ == "__main__":
    main()
