<?php
require 'classes/PageTemplater.php';
require 'classes/YoastMetaTagsLoader.php';
require 'classes/ThemeConfigurator.php';
require 'classes/RESTAPIExtender.php';

$theme = ThemeConfigurator::getInstance();
$theme->initialize();
