"use server";

import { dbConnect } from '@/lib/dbConnect';

export const getItemsFromDB = async (params = {}) => {
  try {
    const db = await dbConnect();
    
    // Build query based on params
    let query = {};
    if (params.category) {
      query.category = params.category;
    }
    if (params.search) {
      query.$or = [
        { name: { $regex: params.search, $options: 'i' } },
        { description: { $regex: params.search, $options: 'i' } }
      ];
    }
    
    const items = await db.collection('items')
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();
    
    // Serialize the data
    const serializedItems = items.map(item => ({
      ...item,
      _id: item._id.toString(),
      createdAt: item.createdAt?.toISOString(),
      updatedAt: item.updatedAt?.toISOString()
    }));
    
    return serializedItems;
  } catch (error) {
    console.error('Error fetching items from DB:', error);
    return [];
  }
};

export const getSingleItemFromDB = async (id) => {
  try {
    const db = await dbConnect();
    const { ObjectId } = require('mongodb');
    
    const item = await db.collection('items').findOne({ _id: new ObjectId(id) });
    
    if (!item) {
      return null;
    }
    
    // Serialize the data
    return {
      ...item,
      _id: item._id.toString(),
      createdAt: item.createdAt?.toISOString(),
      updatedAt: item.updatedAt?.toISOString()
    };
  } catch (error) {
    console.error('Error fetching item from DB:', error);
    return null;
  }
};