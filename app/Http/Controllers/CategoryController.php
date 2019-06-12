<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Resources\CategoryResource;

class CategoryController extends Controller
{
    public function index()
    {
        // Fetch categories and related posts
        $categories = Category::with('posts')->paginate();

        // Return a json response with the $categories data
        return CategoryResource::collection($categories);
    }

    public function show(string $slug)
    {
        // Find the category and related posts or throw a 404
        $category = Category::where('slug', $slug)->with('posts')->firstOrFail();

        return new CategoryResource($category);
    }
}
