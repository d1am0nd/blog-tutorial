<?php

use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(App\Post::class, function (Faker $faker) {
    // Title will have 3 words
    $title = $faker->words(3, true);
    return [
        'title' => $title,
        // Create a slug from the title using laravel's Str class
        'slug' => Str::slug($title),
        // Generate 3 paragraphs
        'content' => $faker->paragraphs(5, true),
        // Generate a new Category
        'category_id' => factory(App\Category::class),
    ];
});
