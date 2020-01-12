<?php

use App\Post;
use App\Category;
use Illuminate\Database\Seeder;

class BlogPostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create 5 Category models
        foreach (factory(Category::class, 5)->create() as $category) {
            // For each Category => create 5 posts
            factory(Post::class, 5)->create([
                // The posts we're creating should belong
                // to the $category from current iteration
                'category_id' => $category->id,
            ]);
        }
    }
}
