document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        const options = this.querySelector('.options');
        const isVisible = options.classList.contains('visible');

        document.querySelectorAll('.options').forEach(option => {
            option.classList.remove('visible');
            option.classList.add('hidden');
        });

        if (!isVisible) {
            options.classList.remove('hidden');
            options.classList.add('visible');
        }

     
        document.querySelectorAll('.box').forEach(box => {
            box.style.borderColor = '#ccc';
            box.querySelector('input[type="radio"]').classList.remove('selected');
        });


        this.style.borderColor = 'green';

        const radioButton = this.querySelector('input[type="radio"]');
        radioButton.checked = true;
        radioButton.classList.add('selected');
    });
});


