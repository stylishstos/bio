import $ from 'jquery';

import initNav from './nav';
import initItems from './items';
import initMailToUs from './mail-to-us';
import initCallMe from './call-me';


function init() {
    initNav($);
    initItems($);
    initMailToUs($);
    initCallMe($);
}

$(document).ready(init);



