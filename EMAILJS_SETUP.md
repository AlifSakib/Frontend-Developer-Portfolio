# EmailJS Setup Guide

This guide will help you configure EmailJS to receive contact form submissions directly to your Gmail inbox.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email address

## Step 2: Add Email Service (Gmail)

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Select **Gmail** from the list
4. Click **Connect Account** and authorize EmailJS to access your Gmail
5. Give your service a name (e.g., "Gmail Service")
6. Click **Create Service**
7. **Copy the Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

### Template Content:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Body:**
```html
<h2>New Contact Form Submission</h2>

<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>
<p><em>This email was sent from your portfolio contact form.</em></p>
```

4. Set the **To Email** field to your Gmail address (or use `{{to_email}}` variable)
5. Click **Save**
6. **Copy the Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (it looks like: `XXXxxxXXXxXXXxXXX`)
3. **Copy the Public Key**

## Step 5: Configure Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### Example:
```env
VITE_EMAILJS_SERVICE_ID=service_abc123xyz
VITE_EMAILJS_TEMPLATE_ID=template_xyz789abc
VITE_EMAILJS_PUBLIC_KEY=Xy9AbC123dEf456Gh
```

## Step 6: Test the Contact Form

1. Restart your development server:
```bash
npm run dev
```

2. Navigate to the Contact section of your portfolio
3. Fill out the form and click **Send Direct Message**
4. Check your Gmail inbox for the test message

## Troubleshooting

### Issue: "EmailJS configuration is missing"
- Make sure your `.env` file has all three variables set
- Restart the dev server after editing `.env`
- Check that variable names start with `VITE_` prefix

### Issue: Email not received
- Check your Gmail spam folder
- Verify the Service ID and Template ID in EmailJS dashboard
- Make sure you authorized Gmail access in EmailJS
- Check the browser console for error messages

### Issue: "Failed to send message"
- Verify your Public Key is correct
- Check EmailJS dashboard for API quota limits (free plan: 200 emails/month)
- Ensure your internet connection is stable

## EmailJS Free Plan Limits

- **200 emails per month**
- **2 email services**
- **2 email templates**

For higher limits, consider upgrading to a paid plan at [https://www.emailjs.com/pricing](https://www.emailjs.com/pricing)

## Security Notes

- Never commit your `.env` file to Git (it's already in `.gitignore`)
- The `.env.example` file is safe to commit (it has placeholder values)
- EmailJS Public Key is safe to expose in frontend code
- All requests are rate-limited by EmailJS to prevent abuse

## Alternative Template Variables

You can customize your email template with these variables:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message body
- `{{to_email}}` - Your email (recipient)

## Support

If you need help:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)
