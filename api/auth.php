<?php

// AUTHENTICATION API

// USER CREDENTIALS CONSTANT
$USER_CREDENTIALS = array(
    "username" => "admin",
    "password" => "admin"
);

// REQUEST PROCESSING
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    login($input);
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    isAuthenticated();
} else if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    logout();
}

// LOGIN
function login($input){
    global $USER_CREDENTIALS;
    session_start();
    if ($input['username'] === $USER_CREDENTIALS['username'] && $input['password'] === $USER_CREDENTIALS['password']) {
        $_SESSION['authenticated'] = true;
        echo json_encode(array("message" => "Login successful", "username" => $input['username']));
    } else {
        http_response_code(401);
        echo json_encode(array("message" => "Invalid credentials"));
    }
}

// CHECK IF AUTHENTICATED
function isAuthenticated(){
    session_start();
    if (isset($_SESSION['authenticated']) && $_SESSION['authenticated'] === true) {
        echo json_encode(array("authenticated" => true));
    } else {
        http_response_code(401);
        echo json_encode(array("authenticated" => false));
    }
}

// LOGOUT
function logout(){
    session_start();
    session_destroy();
    echo json_encode(array("message" => "Logout successful"));
}
?>
