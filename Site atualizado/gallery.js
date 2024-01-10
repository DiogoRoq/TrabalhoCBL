document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('topic-menu').addEventListener('change', function() {
        filterByTopic(this.value);
    });
});

function filterByTopic(topic) {
    let allTopics = document.querySelectorAll('.topic-group');
    allTopics.forEach(group => {
        if (topic === 'all' || group.getAttribute('data-topic') === topic) {
            group.classList.add('active');
        } else {
            group.classList.remove('active');
        }
    });
}
