import { Style } from 'ol/style'
import { FeatureLike } from 'ol/Feature';
import { Geometry } from 'ol/geom';
import GeometryType from 'ol/geom/GeometryType';
import { Extent } from 'ol/extent';
import { Coordinate } from 'ol/coordinate';
import { FrameState } from 'ol/PluggableMap';
import VectorContext from 'ol/render/VectorContext';
import { StyleLike } from 'ol/style/Style';

export interface FeatureAnimationEvent {
    vectorContext: VectorContext,
    frameState: FrameState,
    start: number,
    time: number,
    elapsed: number,
    extent: boolean,
    // Feature information
    feature: FeatureLike,
    geom: Geometry
    typeGeom: GeometryType,
    bbox: Extent
    coord: Coordinate
    style: StyleLike
}
export interface Options {
    duration?: number;
    revers?: boolean;
    repeat?: number;
    hiddenStyle?: Style;
    fade?: ((p0: number) => number);
    easing?: ((p0: number) => number);
}

/** Feature animation base class
 * Use the {@link _ol_Map_#animateFeature} or {@link _ol_layer_Vector_#animateFeature} to animate a feature
 * on postcompose in a map or a layer
* @constructor
* @fires animationstart|animationend
* @param {featureAnimationOptions} options
*	@param {Number} options.duration duration of the animation in ms, default 1000
*	@param {bool} options.revers revers the animation direction
*	@param {Number} options.repeat number of time to repeat the animation, default 0
*	@param {oo.Style} options.hiddenStyle a style to display the feature when playing the animation
*		to be used to make the feature selectable when playing animation
*		(@see {@link ../examples/map.featureanimation.select.html}), default the feature
*		will be hidden when playing (and niot selectable)
*	@param {easing.Function} options.fade an easing function used to fade in the feature, default none
*	@param {easing.Function} options.easing an easing function for the animation, default easing.linear
 */
export class featureAnimation {
    constructor(options?: Options);
    /** Function to perform manipulations onpostcompose.
     * This function is called with an featureAnimationEvent argument.
     * The function will be overridden by the child implementation.
     * Return true to keep this function for the next frame, false to remove it.
     * @param {FeatureAnimationEvent} e
     * @return {bool} true to continue animation.
     * @api
     */
    animate(e: FeatureAnimationEvent): boolean;
}

