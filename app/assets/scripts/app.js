import disMobileThang from './modules/mobileMenu';
import RevealOnScroll from './modules/revealOnScroll';
import $ from 'jquery';

let mobileMenu = new disMobileThang();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '60%');
