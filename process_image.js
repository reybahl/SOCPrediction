var select_area = require("users/bahlreyansh/SOC:select");
var pan_sharpening = require("users/bahlreyansh/SOC:pan_sharpening");
var topographic_correction = require("users/bahlreyansh/SOC:SCS_C_correction");
var spectral_indices = require("users/bahlreyansh/SOC:spectral_indices");


function process_image(long1, lat1, long2, lat2) {
	/* Combine selecting area, pan-sharpening, illumination, topographic correction, and spectral indices */

	var img = select_area.select(long1, lat1, long2, lat2);

	img = pan_sharpening.pan_sharpen(img, ["B1", "B2", "B3", "B4", "B5", "B6", "B7","B9", "B10", "B11"]);
	
	// var corrected = topographic_correction.correct(img);

	var indices = spectral_indices.compute_indices(img);

	return indices;
}

var processed = process_image(-61.937781455384815, -2.8582106566354333, -61.319800498353565, -2.575630995105349);

Export.table.toDrive(
  ee.FeatureCollection([ee.Feature(null,processed)])
);