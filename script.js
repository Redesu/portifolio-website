document.addEventListener('DOMContentLoaded', function() {
    var teaCozyTitle = document.querySelector('.teacozy');
    var teaCozyImage = document.getElementById('teaCozyImage');

    teaCozyTitle.addEventListener('click', function() {
        if (teaCozyImage.style.display === 'none') {
            teaCozyImage.style.display = 'block';
        } else {
            teaCozyImage.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var teaCozyTitle = document.querySelector('.website');
    var teaCozyImage = document.getElementById('websiteImg');

    teaCozyTitle.addEventListener('click', function() {
        if (teaCozyImage.style.display === 'none') {
            teaCozyImage.style.display = 'block';
        } else {
            teaCozyImage.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var teaCozyTitle = document.querySelector('.commonCss');
    var teaCozyImage = document.getElementById('commonImg');

    teaCozyTitle.addEventListener('click', function() {
        if (teaCozyImage.style.display === 'none') {
            teaCozyImage.style.display = 'block';
        } else {
            teaCozyImage.style.display = 'none';
        }
    });
});