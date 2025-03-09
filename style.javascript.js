function showError() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'block'; // 顯示錯誤訊息
}

// 模擬網頁出錯，並顯示錯誤訊息
window.onload = function() {
    // 模擬網頁加載時發生錯誤
    setTimeout(() => {
        showError(); // 顯示錯誤訊息
    }, 2000); // 延遲 一 秒顯示錯誤訊息
};