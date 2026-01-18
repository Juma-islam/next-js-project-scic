# Vercel Deployment Guide

## Environment Variables Setup

আপনার Vercel dashboard এ গিয়ে এই environment variables গুলো add করুন:

### Required Environment Variables:

1. **MONGODB_URI**
   ```
   mongodb+srv://shopUser:htBnMOPGfDcunkxh@cluster0.ecxm2rv.mongodb.net/?appName=Cluster0
   ```

2. **NEXT_PUBLIC_BASE_URL**
   ```
   https://your-vercel-app-name.vercel.app
   ```
   (Replace `your-vercel-app-name` with your actual Vercel app name)

3. **NODE_ENV**
   ```
   production
   ```

## Steps to Add Environment Variables in Vercel:

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add each variable with the values above
5. Make sure to select "Production", "Preview", and "Development" for each variable
6. Redeploy your application

## MongoDB Atlas Setup:

1. Make sure your MongoDB Atlas cluster allows connections from anywhere (0.0.0.0/0) or add Vercel's IP ranges
2. Verify your database user has read/write permissions
3. Test the connection string locally first

## Troubleshooting:

If you still face issues:

1. Check Vercel Function logs in your dashboard
2. Verify MongoDB connection string is correct
3. Make sure all environment variables are set correctly
4. Try redeploying after setting environment variables

## Alternative: Direct Database Connection

The code has been updated to use direct database connections instead of API routes for better performance in production.

## Files Updated:

- `src/lib/dbConnect.js` - Improved MongoDB connection handling
- `src/services/itemsServer.js` - New direct database service
- `src/app/items/page.jsx` - Updated to use direct DB calls
- `src/app/shop/page.jsx` - Updated to use direct DB calls
- `src/services/itemes.itemes.js` - Improved error handling and URL resolution