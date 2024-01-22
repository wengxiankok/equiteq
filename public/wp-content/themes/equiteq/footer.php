</div> 

<footer class="bg-black text-white text-md-left text-left">
    <div class="container">

        <div class="row position-relative">
            <div class="col-md-8">
                <div class="pb-3">
                    <img src="<?php echo get_template_directory_uri() ?>/img/images/svg/Equitec_Logo_ReverseColour_RGB-2.svg" alt="logo">
                </div>
                <?php if (is_active_sidebar('custom-footer-text-widget')): ?>
                    <div id="header-widget-area" class="chw-widget-area widget-area pt-3" role="complementary">
                        <?php dynamic_sidebar('custom-footer-text-widget');?>
                    </div>
                <?php endif;?>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="footer-menu row pt-3 pb-3">
                    <?php hm_get_template_part('template-parts/navigation/navigation-footer');?>
                </div>
                <div class="socials">
                    <ul class="ps-0">

                        <li><a class="youtube" href="https://www.youtube.com/user/equiteq" target="_blank" alt="Youtube"></a></li>
                        <li><a class="twitter" href="https://twitter.com/consultingmanda" target="_blank" alt="Twitter"></a></li>
                        <li><a class="slideshare" href="https://www.slideshare.net/EquiteqEdge" target="_blank" alt="Slideshare"></a></li>
                        <li><a class="linkedin" href="https://www.linkedin.com/company/equiteq-llp" target="_blank" alt="LinkedIn"></a></li>
                    </ul>
                </div>
                <div class="copyright pt-3">
                    <?php hm_get_template_part('template-parts/navigation/navigation-below-footer');?><span class="d-none d-md-inline">&nbsp;&nbsp;&nbsp;</span>Copyright &copy; Equiteq <?php echo date('Y'); ?>
                </div>
            </div>
        </div>

    </div>
</footer>

<?php
// $page2 = get_post($id);
// hm_get_template_part('template-parts/cta/modal-cta-expert', ['page' => $page2]);
?>

<?php wp_footer()?>

</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.9/dist/js/bootstrap-select.min.js"></script>
<script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
<script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script src="<?= bloginfo('template_url') ?>/js/app.js" charset="utf-8"></script>
</body>

</html>