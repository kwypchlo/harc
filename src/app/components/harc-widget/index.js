import angular from 'angular';
import harcWidgetComponent from './harc-widget-component';
import './harc-widget.css';

/**
 * # Widget wrapper component <harc-widget>
 *
 * Wraps and visually normalizes all application widgets.
 *
 * Transclude containers:
 * - widgetTitle (optional): put a title there
 * - widgetIcon (optional): placeholder for an icon, show below or on the left of title
 * - widgetContent: your widget content
 *
 * Usage:
 * <harc-widget>
 *  <widget-title>Lights</widget-title>
 *  <widget-icon>
 *    <md-icon md-font-icon="icon-sun"></md-icon>
 *  </widget-icon>
 *  <widget-content>
 *    This is the content of a widget
 *  </widget-content>
 * </harc-widget>
 *
 * Be sure to check out harc-widget.css for helpful css classes (eg. harc-widget-row)
 */
const module = angular.module('harcWidget', [])
  .component('harcWidget', harcWidgetComponent);

export default module.name;
