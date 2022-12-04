var spectral = require("users/dmlmont/spectral:spectral");

var rectangle = ee.Geometry.Rectangle([-63, -3.46, -62, -2.46]);

var l8 = ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA');

// Get the least cloudy image in 2015.
var img = ee.Image(
	l8.filterBounds(rectangle)
	.filterDate('2015-01-01', '2015-12-31')
	.sort('CLOUD_COVER')
	.first()
);

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

var indices = [
	'AFRI1600',
	'AFRI2100',
	'ANDWI',
	'ARI',
	'ARI2',
	'AVI',
	'AWEInsh',
	'AWEIsh',
	'BAI',
	'BAIM',
	'BAIS2',
	'BCC',
	'BI',
	'BITM',
	'BIXS',
	'BLFEI',
	'BNDVI',
	'BRBA',
	'BaI',
	'CIG',
	'CIRE',
	'CSI',
	'CSIT',
	'CVI',
	'DBI',
	'DBSI',
	'DPDD',
	'DSI',
	'DSWI1',
	'DSWI2',
	'DSWI3',
	'DSWI4',
	'DSWI5',
	'DVI',
	'DpRVIHH',
	'DpRVIVV',
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
	'GM1',
	'GM2',
	'GNDVI',
	'GOSAVI',
	'GRNDVI',
	'GRVI',
	'GSAVI',
	'GVMI',
	'IBI',
	'IKAW',
	'IPVI',
	'IRECI',
	'LSWI',
	'MBI',
	'MCARI',
	'MCARI1',
	'MCARI2',
	'MCARI705',
	'MCARIOSAVI',
	'MCARIOSAVI705',
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
	'MSR705',
	'MTCI',
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
	'NBRplus',
	'NBSIMS',
	'NBUI',
	'ND705',
	'NDBI',
	'NDBaI',
	'NDCI',
	'NDDI',
	'NDGlaI',
	'NDII',
	'NDISIb',
	'NDISIg',
	'NDISImndwi',
	'NDISIndwi',
	'NDISIr',
	'NDMI',
	'NDPolI',
	'NDPonI',
	'NDREI',
	'NDSI',
	'NDSII',
	'NDSIWV',
	'NDSWIR',
	'NDSaII',
	'NDSoiI',
	'NDTI',
	'NDVI',
	'NDVI705',
	'NDVIMNDWI',
	'NDVIT',
	'NDWI',
	'NDYI',
	'NGRDI',
	'NHFD',
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
	'PSRI',
	'QpRVI',
	'RCC',
	'RDVI',
	'REDSI',
	'RENDVI',
	'RFDI',
	'RGBVI',
	'RGRI',
	'RI',
	'RI4XS',
	'RVI',
	'S2REP',
	'S2WI',
	'S3',
	'SARVI',
	'SAVI',
	'SAVIT',
	'SEVI',
	'SI',
	'SIPI',
	'SR',
	'SR2',
	'SR3',
	'SR555',
	'SR705',
	'SWI',
	'SWM',
	'SeLI',
	'TCARI',
	'TCARIOSAVI',
	'TCARIOSAVI705',
	'TCI',
	'TDVI',
	'TGI',
	'TRRVI',
	'TTVI',
	'TVI',
	'TriVI',
	'UI',
	'VARI',
	'VARI700',
	'VDDPI',
	'VHVVD',
	'VHVVP',
	'VHVVR',
	'VI6T',
	'VI700',
	'VIBI',
	'VIG',
	'VVVHD',
	'VVVHR',
	'VVVHS',
	'VgNIRBI',
	'VrNIRBI',
	'WI1',
	'WI2',
	'WI2015',
	'WRI',
	'mND705',
	'mSR705'
];

spectral.computeIndex(img, indices, parameters);