"use server";

export const getItems = async (params = {}) => {
  try {
    // For server-side rendering, we need to use absolute URL or direct database call
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : "http://localhost:3000";
    
    const queryString = new URLSearchParams(params).toString();
    const url = `${baseUrl}/api/items${queryString ? `?${queryString}` : ''}`;
    
    const res = await fetch(url, {
      next: {
        revalidate: 60,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) {
      console.error(`Failed to fetch items: ${res.status} ${res.statusText}`);
      throw new Error(`Failed to fetch items: ${res.status}`);
    }
    
    const data = await res.json();
    return data; 
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
};

export const getSingleItem = async (id) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : "http://localhost:3000";
    
    const res = await fetch(
      `${baseUrl}/api/items/${id}`,
      {
        next: {
          revalidate: 60,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    
    if (!res.ok) {
      console.error(`Failed to fetch item: ${res.status} ${res.statusText}`);
      throw new Error(`Failed to fetch item: ${res.status}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching item:', error);
    return null;
  }
};
