document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleButton');
    var interestsSection = document.getElementById('interests');
    var interestsListItems = interestsSection.querySelectorAll('li');

    toggleButton.addEventListener('click', function() {
        if (interestsSection.style.display === 'none') {
            interestsSection.style.display = 'block';
        } else {
            interestsSection.style.display = 'none';
        }
    });

    interestsListItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#e0e0e0';
        });

        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('header');
    header.addEventListener('click', function() {
        header.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

