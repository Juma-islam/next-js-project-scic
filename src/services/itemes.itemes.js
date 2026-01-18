"use server";

export const getItems = async (params = {}) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const url = `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/items${queryString ? `?${queryString}` : ''}`;
    
    const res = await fetch(url, {
      next: {
        revalidate: 60,
      },
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch items');
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
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/items/${id}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );
    
    if (!res.ok) {
      throw new Error('Failed to fetch item');
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching item:', error);
    return null;
  }
};
