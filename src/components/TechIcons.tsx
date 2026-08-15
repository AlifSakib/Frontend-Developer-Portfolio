import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const TechIcons: Record<string, React.FC<IconProps>> = {
  html: ({ className = 'w-8 h-8', size }) => (
    <svg style={size ? { width: size, height: size } : undefined} className={className} viewBox="0 0 24 24" fill="none">
      <path d="M4 3L5.5 19.5L12 21.5L18.5 19.5L20 3H4Z" fill="#E44D26"/>
      <path d="M12 4.5V19.8L17.2 18.2L18.4 4.5H12Z" fill="#F16529"/>
      <path d="M12 8.3H8.3L8.5 10.7H12V13H8.7L8.9 15.3L12 16.2V18.5L6.6 17L6 7.4L6.1 6H12V8.3Z" fill="#EBEBEB"/>
      <path d="M12 8.3H15.7L15.3 12.3H12V10.3H15.5L15.6 8.3H12V6H17.9L17.3 13.5H12V16.2L15.1 15.3L15.3 13.5H17.6L17.2 17.7L12 19.1V16.2Z" fill="white"/>
    </svg>
  ),
  css: ({ className = 'w-8 h-8', size }) => (
    <svg style={size ? { width: size, height: size } : undefined} className={className} viewBox="0 0 24 24" fill="none">
      <path d="M4 3L5.5 19.5L12 21.5L18.5 19.5L20 3H4Z" fill="#1572B6"/>
      <path d="M12 4.5V19.8L17.2 18.2L18.4 4.5H12Z" fill="#33A9DC"/>
      <path d="M12 8.3H8.3L8.5 10.7H12V13H8.7L8.9 15.3L12 16.2V18.5L6.6 17L6 7.4L6.1 6H12V8.3Z" fill="#EBEBEB"/>
      <path d="M12 6V8.3H17.8L17.4 12.3H12V14.6H15.2L15 16.9L12 17.8V20.1L17.2 18.7L17.9 6H12Z" fill="white"/>
    </svg>
  ),
  javascript: ({ className = 'w-8 h-8', size }) => (
    <svg style={size ? { width: size, height: size } : undefined} className={className} viewBox="0 0 24 24">
      <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
      <path d="M6.5 18.2C7.3 18.2 7.9 17.8 8.1 17.2C8.3 16.6 8.3 15.8 8.3 14.8V9.5H10.1V14.8C10.1 16.3 9.7 17.5 8.9 18.3C8.1 19.1 7 19.5 5.5 19.5C4.5 19.5 3.6 19.2 2.9 18.7L3.7 17.2C4.3 17.6 5.1 17.9 5.8 17.9C6.1 17.9 6.4 18 6.5 18.2ZM13.8 18.1C14.6 18.6 15.6 18.9 16.7 18.9C18.6 18.9 19.8 17.9 19.8 16.3C19.8 15.1 19.1 14.2 17.5 13.5L16.5 13.1C15.5 12.7 15.1 12.2 15.1 11.6C15.1 10.7 15.8 10.1 16.9 10.1C17.7 10.1 18.5 10.4 19.1 10.8L19.7 9.4C18.9 8.9 17.9 8.6 16.9 8.6C15.1 8.6 13.9 9.6 13.9 11.1C13.9 12.3 14.7 13.1 16.2 13.8L17.2 14.2C18.2 14.6 18.6 15.2 18.6 15.9C18.6 16.9 17.7 17.5 16.6 17.5C15.5 17.5 14.6 17.1 13.8 16.5L13.8 18.1Z" fill="#1C1C1C"/>
    </svg>
  ),
  typescript: ({ className = 'w-8 h-8', size }) => (
    <svg style={size ? { width: size, height: size } : undefined} className={className} viewBox="0 0 24 24">
      <rect width="24" height="24" rx="3" fill="#3178C6"/>
      <path d="M4 10.5H10.5V12H7.9V19H6.4V12H4V10.5ZM12.2 17.2C12.8 17.6 13.6 17.9 14.5 17.9C15.9 17.9 16.9 17.1 16.9 15.9C16.9 15 16.4 14.3 15.1 13.8L14.3 13.4C13.5 13.1 13.2 12.7 13.2 12.2C13.2 11.5 13.7 11 14.6 11C15.3 11 15.9 11.2 16.4 11.6L16.9 10.4C16.3 10 15.5 9.7 14.7 9.7C13.3 9.7 12.3 10.5 12.3 11.7C12.3 12.6 12.9 13.3 14.1 13.8L14.9 14.1C15.8 14.5 16.1 14.9 16.1 15.5C16.1 16.3 15.4 16.7 14.5 16.7C13.7 16.7 13 16.4 12.3 15.9L12.2 17.2Z" fill="white"/>
    </svg>
  ),
  react: ({ className = 'w-8 h-8', size }) => (
    <svg style={size ? { width: size, height: size } : undefined} className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.2" fill="#00D8FF"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00D8FF" strokeWidth="1.4" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)" stroke="#00D8FF" strokeWidth="1.4" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)" stroke="#00D8FF" strokeWidth="1.4" fill="none"/>
    </svg>
  ),
  nextjs: ({ className = 'w-8 h-8', size }) => (
    <svg style={size ? { width: size, height: size } : undefined} className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="11" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M16.5 17.5L8.5 7.5H6.5V16.5H8.3V10.2L15.3 18.8C15.7 18.4 16.1 18 16.5 17.5Z" fill="currentColor"/>
      <rect x="15.2" y="7.5" width="1.8" height="9" fill="currentColor"/>
    </svg>
  ),
  tailwind: ({ className = 'w-8 h-8', size }) => (
    <svg style={size ? { width: size, height: size } : undefined} className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 6C8.8 6 6.8 7.6 6 10.8C7.2 9.2 8.6 8.6 10.2 9C11.1 9.2 11.7 9.8 12.4 10.5C13.5 11.7 14.8 13 18 13C21.2 13 23.2 11.4 24 8.2C22.8 9.8 21.4 10.4 19.8 10C18.9 9.8 18.3 9.2 17.6 8.5C16.5 7.3 15.2 6 12 6ZM6 13C2.8 13 0.8 14.6 0 17.8C1.2 16.2 2.6 15.6 4.2 16C5.1 16.2 5.7 16.8 6.4 17.5C7.5 18.7 8.8 20 12 20C15.2 20 17.2 18.4 18 15.2C16.8 16.8 15.4 17.4 13.8 17C12.9 16.8 12.3 16.2 11.6 15.5C10.5 14.3 9.2 13 6 13Z" fill="#38BDF8"/>
    </svg>
  ),
  sass: ({ className = 'w-8 h-8', size }) => (
    <svg style={size ? { width: size, height: size } : undefined} className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#CF649A"/>
      <path d="M12 5C8.1 5 5 7.5 5 10.5C5 12.7 6.6 14.5 9 15.3C8.6 15.9 8.2 16.7 8.2 17.2C8.2 18.2 9.4 18.8 10.5 18.8C11.9 18.8 13.3 17.8 14.1 16.5C14.7 15.6 15 14.5 15 13.5C15 12.3 14.4 11.4 13.4 11.4C12.4 11.4 11.8 12.1 11.8 12.9C11.8 13.7 12.3 14.1 12.3 14.5C12.3 14.7 12.1 14.9 11.7 14.9C11.2 14.9 10.6 14.4 10.6 13.4C10.6 12 11.8 10.6 13.7 10.6C15.8 10.6 17.3 12 17.3 14C17.3 16.5 15.2 18.5 12.5 18.5C11.5 18.5 10.7 18.2 10.2 17.9L10 18.3C10.6 18.7 11.6 19 12.5 19C15.8 19 18.5 16.7 18.5 13.8C18.5 11.3 16.6 9.6 14.1 9.6C13.2 9.6 12.4 9.9 11.8 10.3C11.5 8.9 12.8 7.5 14.6 7.5C15.7 7.5 16.6 7.9 17.1 8.3L17.7 7.4C16.9 6.8 15.7 6.4 14.4 6.4C12.9 6.4 11.6 7.1 10.9 8.2C9.5 8.5 8.5 9.4 8.5 10.5C8.5 11.8 9.5 12.8 10.8 12.8C11.1 12.8 11.3 12.7 11.4 12.6C11.4 12.4 11.3 12.1 11.3 11.8C11.3 10.8 12.1 10 13.2 10C14 10 14.5 10.5 14.5 11.2C14.5 12.2 13.7 13.3 12.6 13.3C12.2 13.3 11.9 13.1 11.9 12.8C11.9 12.2 12.5 11.6 13.2 11.6C13.6 11.6 13.8 11.8 13.8 12.1L14.3 12.1C14.3 11.4 13.8 10.9 13.1 10.9C11.9 10.9 10.8 12 10.8 13.4C10.8 14.6 11.7 15.4 12.9 15.4C14.6 15.4 16 13.9 16 12.1C16 10.5 14.7 9.3 13 9.3C11.3 9.3 10 10.6 10 12.1C10 13 10.5 13.8 11.3 14.2C9.3 13.5 8 12 8 10.5C8 8.7 10.2 7 12.8 7C14.2 7 15.5 7.6 16.3 8.3L17 7.3C15.9 6.4 14.4 5.8 12.8 5.8C8.5 5.8 5.5 8.4 5.5 11.5C5.5 13.8 7.3 15.7 10 16.5C9.4 17.3 8.9 18.2 8.9 18.8H10.1C10.1 18.2 10.7 17.2 11.4 16.4C11.8 16.5 12.3 16.5 12.8 16.5C15.5 16.5 17.5 14.7 17.5 12.5C17.5 10.8 16.1 9.5 14.2 9.5C12.7 9.5 11.5 10.4 11.1 11.6C10.7 11.2 10.4 10.8 10.4 10.3C10.4 9.5 11.2 8.8 12.2 8.8C12.7 8.8 13.2 9 13.5 9.3L14 8.5C13.5 8.1 12.9 7.9 12.2 7.9C10.7 7.9 9.5 8.9 9.5 10.2C9.5 10.9 9.9 11.5 10.5 11.9C9.1 12.5 8.2 13.7 8.2 15C8.2 16.2 9 17.3 10.3 17.7L10.5 17.2C9.4 16.8 8.8 16 8.8 15C8.8 13.8 9.8 12.7 11.3 12.2L12 5Z" fill="white"/>
    </svg>
  ),
  redux: ({ className = 'w-8 h-8', size }) => (
    <svg style={size ? { width: size, height: size } : undefined} className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#764ABC"/>
      <path d="M14.5 10.5C15.6 11.6 15.6 13.4 14.5 14.5C13.4 15.6 11.6 15.6 10.5 14.5C9.4 13.4 9.4 11.6 10.5 10.5C11.6 9.4 13.4 9.4 14.5 10.5Z" fill="white"/>
      <path d="M7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12Z" stroke="white" strokeWidth="1.5"/>
    </svg>
  ),
  git: ({ className = 'w-8 h-8', size }) => (
    <svg style={size ? { width: size, height: size } : undefined} className={className} viewBox="0 0 24 24">
      <path d="M21.6 10.6L13.4 2.4C12.6 1.6 11.4 1.6 10.6 2.4L8.8 4.2L11 6.4C11.6 6.2 12.4 6.3 12.9 6.8C13.4 7.3 13.6 8.1 13.3 8.7L15.4 10.8C16 10.5 16.8 10.7 17.3 11.2C18 11.9 18 13.1 17.3 13.8C16.6 14.5 15.4 14.5 14.7 13.8C14.2 13.3 14 12.5 14.3 11.9L12.4 10C12.1 10.1 11.9 10.2 11.6 10.2C11 10.2 10.5 9.9 10.1 9.5C9.6 9 9.4 8.3 9.6 7.7L7.4 5.5L2.4 10.5C1.6 11.3 1.6 12.5 2.4 13.3L10.6 21.5C11.4 22.3 12.6 22.3 13.4 21.5L21.6 13.3C22.4 12.6 22.4 11.3 21.6 10.6ZM11.6 15.5C10.9 15.5 10.3 14.9 10.3 14.2C10.3 13.5 10.9 12.9 11.6 12.9C12.3 12.9 12.9 13.5 12.9 14.2C12.9 14.9 12.3 15.5 11.6 15.5Z" fill="#F05032"/>
    </svg>
  ),
  nodejs: ({ className = 'w-8 h-8', size }) => (
    <svg style={size ? { width: size, height: size } : undefined} className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z" fill="#339933"/>
      <path d="M12 4.5L18.8 8.4V15.6L12 19.5L5.2 15.6V8.4L12 4.5Z" fill="#5FA04E"/>
      <path d="M12 7.5L16.2 9.9V14.1L12 16.5L7.8 14.1V9.9L12 7.5Z" fill="#FFFFFF"/>
    </svg>
  ),
  vite: ({ className = 'w-8 h-8', size }) => (
    <svg style={size ? { width: size, height: size } : undefined} className={className} viewBox="0 0 24 24" fill="none">
      <path d="M21.5 3.5L12.5 20.5L3 4L11.5 6L16.5 2.5L21.5 3.5Z" fill="#BD34FE"/>
      <path d="M17.5 2L10 6.5L11.5 12L16 6L12.5 18L19.5 5L17.5 2Z" fill="#FFD62E"/>
    </svg>
  ),
};

export const TechIconBadge: React.FC<{
  iconKey: string;
  name: string;
  className?: string;
  size?: number;
}> = ({ iconKey, name, className = 'w-8 h-8', size }) => {
  const IconComponent = TechIcons[iconKey.toLowerCase()];
  if (IconComponent) {
    return <IconComponent className={className} size={size} />;
  }
  return (
    <div
      style={size ? { width: size, height: size } : undefined}
      className={`flex items-center justify-center font-bold text-xs rounded bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400 ${className}`}
    >
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
};
