var spectral = require("users/dmlmont/spectral:spectral");

var rectangle = ee.Geometry.Rectangle([-63, -3.46, -62, -2.46]);

var dataset = 'LANDSAT/LC08/C01/T1_TOA';

var l8 = ee.ImageCollection(dataset);

// Get the least cloudy image in 2015.
var img = ee.Image(
	l8.filterBounds(rectangle)
	.filterDate('2015-01-01',
				'2015-12-31')
	.sort('CLOUD_COVER').first()
);

var img = spectral.scale(img,
dataset)
var img = spectral.offset(img,dataset)

var parameters = {
	"A": img.select("B1"),
	"B": img.select("B2"),
	"G": img.select("B3"),
	"R": img.select("B4"),
	"N": img.select("B5"),
	"S1": img.select("B6"),
	"S2": img.select("B7"),
	"T1": img.select("B10"),
	"T2": img.select("B11"),
	"L": 1,
	"g": 2.5,
	"C1": 6,
	"C2": 7.5
};

print(parameters);

var indices = [
	'AFRI1600',
	'AFRI2100',
	'ANDWI',
	'AVI',
	'AWEInsh',
	'AWEIsh',
	'BAI',
	'BAIM',
	'BCC',
	'BI',
	'BITM',
	'BIXS',
	'BLFEI',
	'BNDVI',
	'BRBA',
	'BaI',
	'CIG',
	'CSI',
	'CSIT',
	'CVI',
	'DBI',
	'DBSI',
	'DSI',
	'DSWI1',
	'DSWI2',
	'DSWI3',
	'DSWI4',
	'DSWI5',
	'DVI',
	'EBBI',
	'EMBI',
	'EVI',
	'EVI2',
	'ExG',
	'ExGR',
	'ExR',
	'FCVI',
	'GARI',
	'GBNDVI',
	'GCC',
	'GEMI',
	'GLI',
	'GNDVI',
	'GOSAVI',
	'GRNDVI',
	'GRVI',
	'GSAVI',
	'GVMI',
	'IBI',
	'IKAW',
	'IPVI',
	'LSWI',
	'MBI',
	'MCARI1',
	'MCARI2',
	'MGRVI',
	'MIRBI',
	'MLSWI26',
	'MLSWI27',
	'MNDVI',
	'MNDWI',
	'MNLI',
	'MRBVI',
	'MSAVI',
	'MSI',
	'MSR',
	'MTVI1',
	'MTVI2',
	'MuWIR',
	'NBAI',
	'NBLI',
	'NBR',
	'NBR2',
	'NBRSWIR',
	'NBRT1',
	'NBRT2',
	'NBRT3',
	'NBSIMS',
	'NBUI',
	'NDBI',
	'NDBaI',
	'NDDI',
	'NDGlaI',
	'NDII',
	'NDISIb',
	'NDISIg',
	'NDISImndwi',
	'NDISIndwi',
	'NDISIr',
	'NDMI',
	'NDPonI',
	'NDSI',
	'NDSII',
	'NDSIWV',
	'NDSWIR',
	'NDSaII',
	'NDSoiI',
	'NDTI',
	'NDVI',
	'NDVIMNDWI',
	'NDVIT',
	'NDWI',
	'NDYI',
	'NGRDI',
	'NIRv',
	'NLI',
	'NMDI',
	'NRFIg',
	'NRFIr',
	'NSDS',
	'NSDSI1',
	'NSDSI2',
	'NSDSI3',
	'NSTv1',
	'NSTv2',
	'NWI',
	'NormG',
	'NormNIR',
	'NormR',
	'OSAVI',
	'PISI',
	'RCC',
	'RDVI',
	'RGBVI',
	'RGRI',
	'RI',
	'RI4XS',
	'S3',
	'SARVI',
	'SAVI',
	'SAVIT',
	'SI',
	'SIPI',
	'SR',
	'SR2',
	'SWI',
	'SWM',
	'TDVI',
	'TGI',
	'TVI',
	'TriVI',
	'UI',
	'VARI',
	'VI6T',
	'VIBI',
	'VIG',
	'VgNIRBI',
	'VrNIRBI',
	'WI1',
	'WI2',
	'WI2015',
	'WRI'
];

for (var x in indices) {
	try {
		img = spectral.computeIndex(img, [indices[x]], parameters);
	}
	catch(err) {
		;
	}
}

var meanDict = img.reduceRegion({
	reducer: ee.Reducer.mean(),
	geometry: rectangle,
	scale: 90,
	maxPixels: 40e9
});

print(meanDict)
