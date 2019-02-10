import onScreen from './onscreen.min';

const os = new onScreen({
    tolerance: 0,
    debounce: 0
});

os.on('enter', '#section1', function(el) {
    el.classList.add('onScreen');
});



