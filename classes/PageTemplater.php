<?php
/**
 * code based on: https://github.com/wpexplorer/page-templater
 */
class PageTemplater
{
    private static $instance;
    public $templates;

    private function __construct()
    {
        $this->templates = array();

        // Add a filter to the attributes metabox to inject template into the cache.
        if (version_compare(floatval(get_bloginfo('version')), '4.7', '<')) {
            // 4.6 and older
            add_filter('page_attributes_dropdown_pages_args', array($this, 'register_project_templates'));

        } else {
            // Add a filter to the wp 4.7 version attributes metabox
            add_filter('theme_page_templates', array($this, 'add_new_template'));
        }

        // Add a filter to the save post to inject out template into the page cache
        add_filter('wp_insert_post_data', array($this, 'register_project_templates'));
    }

    /**
     * Adds our template to the page dropdown for v4.7+
     */
    public function add_new_template($posts_templates)
    {
        $posts_templates = array_merge($posts_templates, $this->templates);
        
        return $posts_templates;
    }

    /**
     * Adds our template to the pages cache in order to trick WordPress
     * into thinking the template file exists where it doens't really exist.
     */
    public function register_project_templates($atts)
    {
        // Create the key used for the themes cache
        $cache_key = 'page_templates-' . md5(get_theme_root() . '/' . get_stylesheet());

        // Retrieve the cache list.
        // If it doesn't exist, or it's empty prepare an array
        $templates = wp_get_theme()->get_page_templates();
        if (empty($templates)) {
            $templates = array();
        }

        // New cache, therefore remove the old one
        wp_cache_delete($cache_key, 'themes');

        // Now add our template to the listist of templates by merging our templates
        // with the existing templates array from the cache.
        $templates = array_merge($templates, $this->templates);

        // Add the modified cache to allow WordPress to pick it up for listing
        // available templates
        wp_cache_add($cache_key, $templates, 'themes', 1800);

        return $atts;
    }

    public static function get_instance()
    {
        if (null == self::$instance) {
            self::$instance = new PageTemplater();
        }

        return self::$instance;
    }
}
