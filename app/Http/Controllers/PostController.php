<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use App\Http\Resources\PostResource;

class PostController extends Controller
{
    public function index(Request $request)
    {
      $posts = Post::with('category')
        ->when($request->has('search'), function ($query) use ($request) {
            // This will only get executed when the search parameter exists
            return $query->where('title', 'LIKE', '%'.$request->input('search').'%');
        })
        // Orders the posts to display latest first
        ->latest()
        ->paginate();

        return PostResource::collection($posts);
    }

    public function show(string $slug)
    {
      $post = Post::with('category')->where('slug', $slug)->firstOrFail();

      return new PostResource($post);
    }
}
