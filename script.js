// وظيفة فتح النافذة وتعبيتها بالمعلومات
function openProduct(name, price, img) {
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalImg').src = img;
    document.getElementById('productModal').style.display = "block";
    // يمنع الصفحة من التحرك في الخلفية
    document.body.style.overflow = "hidden";
}

// وظيفة إغلاق النافذة
function closeModal() {
    document.getElementById('productModal').style.display = "none";
    document.body.style.overflow = "auto";
}

// وظيفة إرسال الطلب للواتساب
function sendWhatsApp() {
    const name = document.getElementById('modalName').innerText;
    const price = document.getElementById('modalPrice').innerText;
    const size = document.getElementById('sizeSelect').value;
    const color = document.getElementById('colorSelect').value;
    
    const phoneNumber = "21656206785"; 
    const message = `مرحباً Elite Footwear، أريد طلب هذا الحذاء:
- الموديل: ${name}
- الثمن: ${price}
- المقاس: ${size}
- اللون: ${color}`;

    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
}

// إغلاق النافذة عند النقر خارج المحتوى
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        closeModal();
    }
}
