<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 

    <title>Ordering System</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>

<body class="antialiased font-poppins ">
    <div id="app" class="">
        <app></app>
    </div>
    <script defer src="{{ asset('js/app.js') }}"></script>
    <script defer src="{{ asset('js/custom.js') }}"></script>

</body>

</html>
