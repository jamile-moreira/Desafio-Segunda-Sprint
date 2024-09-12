* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f9;
    color: #333;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
}

header {
    background-color: #ff2e00;
    width: 100%;
    padding: 20px;
    text-align: center;
    color: white;
    border-radius: 8px;
    margin-bottom: 40px;
}

h1 {
    font-size: 24px;
}

main {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
}

form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
}

label {
    font-size: 14px;
    font-weight: bold;
    color: #555;
}

input, select, button {
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #ddd;
    font-size: 16px;
    width: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

input:focus, select:focus {
    border-color: #ff2e00;
    outline: none;
    box-shadow: 0 0 8px rgba(255, 46, 0, 0.3);
}

button {
    background-color: #ff2e00;
    color: white;
    border: none;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #e02600;
}

#summary {
    text-align: center;
    background-color: #fafafa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

#summary h2 {
    font-size: 18px;
    margin-bottom: 10px;
}

#summary p {
    font-size: 20px;
    color: #333;
    font-weight: bold;
}
