@extends('shopify-app::layouts.default')

@section('content')
    <link
        rel="stylesheet"
        href="https://unpkg.com/@shopify/polaris@7.3.1/build/esm/styles.css"
    />
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <div id="root"></div>
@endsection

@section('scripts')
    @parent
    <script src="{{asset('js/app.js')}}"></script>
@endsection
