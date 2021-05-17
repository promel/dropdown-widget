<?php
    if($_SERVER["REQUEST_METHOD"] == "GET"){
        include 'get.php'; 
    }

    if($_SERVER["REQUEST_METHOD"] == "POST"){

       include 'post.php'; 
    }
    
    