<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .title {
                font-size: 2em;
                margin-top: 0.5em;
            }
            
            h2 {
                margin-bottom: 0.3em;
            }

            .container {
                width: auto;
                max-width: 680px;
                padding: 0 15px;
                margin-left: auto;
                margin-right: auto;
            }

            ul.categories {
                list-style-type: none;
                margin: 0;
                padding: 0;
                overflow: hidden;
                margin-bottom: 1em;
            }

            ul.categories li {
                float: left;
            }

            ul.categories li a {
                display: block;
                padding-right: 10px;
            }

            .summary {
                font-size: 1.2em;
                margin-top: 0.3em;
                margin-bottom: 0.3em;
            }

            .read-more {
                margin-top: 5px;
                display: block;
            }
        </style>
    </head>
    <body>
        <!-- Begin page content -->
        <main role="main" class="container" id="root"></main>
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
