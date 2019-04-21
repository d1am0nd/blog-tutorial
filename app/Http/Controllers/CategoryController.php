<?php

namespace App\Http\Controllers;

use App\Category;

class CategoryController extends Controller
{
    public function index()
    {
        // Fetch categories and related posts
        $categories = Category::with('posts')->paginate();

        // Retrun a json response with the $categories data
        return response()->json($categories);
    }

    public function show(string $slug)
    {
        // Find the category and related posts or throw a 404
        $category = Category::where('slug', $slug)->with('posts')->firstOrFail();

        return response()->json($category);
    }
}
