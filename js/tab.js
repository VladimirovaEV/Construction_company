document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-link-how').forEach(function (navLinkHow) {
        navLinkHow.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path;
            document.querySelectorAll('.how__tab').forEach(function (howTab) {
                howTab.classList.remove('how__tab-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('how__tab-active')
        })
    })
})