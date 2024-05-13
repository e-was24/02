function handleFileSelect(event) {
    const files = event.target.files;
    const previewContainer = document.getElementById('preview-container');
    previewContainer.innerHTML = ''; // Bersihkan kontainer preview sebelum menambahkan yang baru

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const previewItem = document.createElement('div');
            previewItem.classList.add('preview-item');

            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = ''; // Menyembunyikan teks alt (nama file)
                previewItem.appendChild(img);
            } else if (file.type.startsWith('video/')) {
                const video = document.createElement('video');
                video.src = e.target.result;
                video.controls = true;
                previewItem.appendChild(video);
            }

            previewContainer.appendChild(previewItem);
        };

        reader.readAsDataURL(file);
    }
}
