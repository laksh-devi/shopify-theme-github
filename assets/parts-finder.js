// $(document).ready(function() {
//   const client = algoliasearch('S6M009OAXE','c07368ed9b44ad8f68c7602c9fdc77f8');
//   const index = client.initIndex('shopify_products');
//   console.log("Parts Finder scripts");
//   const typeDD = document.getElementById('pfType')
//   const manufacturerDD = document.getElementById('pfManufacturer')
//   const seriesDD = document.getElementById('pfSeries')
//   const modelDD = document.getElementById('pfModel')
//   const SearchBtn = document.getElementById('pfSearch')

//   let productUrl = ''

//   const searchForType = () => {
//       index.searchForFacetValues('named_tags.Type', '').then((res) => {
//         const {facetHits} = res
//         var defaultOpt = document.createElement('option');
//         defaultOpt.value = ''
//         defaultOpt.innerHTML = 'Maschinentyp Wählen'
// //         typeDD.appendChild(defaultOpt)
//         facetHits.map((cat) => {
//           var opt = document.createElement('option');
//           opt.value = cat.value;
//           opt.innerHTML = cat.value;
//           typeDD.appendChild(opt)
//         })
//       })
//     }
    
//     const searchForManufacturer = () => {
//       index.searchForFacetValues('named_tags.Manufacturer', '', {
//       filters: `named_tags.Type:"${typeDD.value}"`
//     }).then((res) => {
//         $(manufacturerDD).empty();
//         const {facetHits} = res
//         var defaultOpt = document.createElement('option');
//         defaultOpt.value = ''
//         defaultOpt.innerHTML = 'Hersteller Auswählen'
//         manufacturerDD.appendChild(defaultOpt)
//         facetHits.map((cat) => {
//           var opt = document.createElement('option');
//           opt.value = cat.value;
//           opt.innerHTML = cat.value;
//           manufacturerDD.appendChild(opt)
//         })
//       })
//     }
  
//   const searchForSeries = async () => {
//     index.searchForFacetValues('named_tags.Series', '', {
//       filters: `named_tags.Type:"${typeDD.value}" AND named_tags.Manufacturer:"${manufacturerDD.value}"`
//     }).then((res) => {
//       $(seriesDD).empty();
//       const {facetHits} = res
//         var defaultOpt = document.createElement('option');
//         defaultOpt.value = ''
//         defaultOpt.innerHTML = 'Serie Auswählen'
//         seriesDD.appendChild(defaultOpt)
//         facetHits.map((cat) => {
//           var opt = document.createElement('option');
//           opt.value = cat.value;
//           opt.innerHTML = cat.value;
//           seriesDD.appendChild(opt)
//         })
//     })
//   }

//   const searchForModels = async () => {
//     index.searchForFacetValues('named_tags.Model', '', {
//       filters: `named_tags.Type:"${typeDD.value}" AND named_tags.Manufacturer:"${manufacturerDD.value}" AND named_tags.Series:"${seriesDD.value}"`
//     }).then((res) => {
//       $(modelDD).empty();
//       var defaultOpt = document.createElement('option');
//       defaultOpt.value = ''
//       defaultOpt.innerHTML = 'Modell Auswählen'
//       modelDD.appendChild(defaultOpt)
//         const {facetHits} = res
//         facetHits.map((cat) => {
//           var opt = document.createElement('option');
//           opt.value = cat.value;
//           opt.innerHTML = cat.value;
//           modelDD.appendChild(opt)
//         })
//     })
//   }



//   const searchForProduct = () => {
//     productUrl = `/collections/${manufacturerDD.value.toLowerCase().replace(' ', '-')}-${modelDD.value.toLowerCase().replace(' ', '-').replace('.', '-')}`
//   }
  
//   const resetManufacturer = () => {
//     manufacturerDD.disabled = true
//     $(manufacturerDD).empty()
//     var defaultOpt = document.createElement('option');
//     defaultOpt.value = ''
//     defaultOpt.innerHTML = 'Modell Auswählen'
//     manufacturerDD.appendChild(defaultOpt)
//   }

//   const resetModel = () => {
//     modelDD.disabled = true
//     $(modelDD).empty()
//     var defaultOpt = document.createElement('option');
//     defaultOpt.value = ''
//     defaultOpt.innerHTML = 'Modell Auswählen'
//     modelDD.appendChild(defaultOpt)
//   }

//   const resetSeries = () => {
//     seriesDD.disabled = true
//     $(seriesDD).empty()
//     var defaultOpt = document.createElement('option');
//     defaultOpt.value = ''
//     defaultOpt.innerHTML = 'Serie Auswählen'
//     seriesDD.appendChild(defaultOpt)
//   }


//     if(typeDD) {
//       searchForType()
//     }

//   	typeDD.addEventListener('change', function(e) {
//       if(e.target.value == '') {
//         resetManufacturer()
//         resetSeries()
//         resetModel()
//         SearchBtn.setAttribute('disabled', true)
//       } else {
//         searchForManufacturer()
//         manufacturerDD.disabled = false
//       }
//     })
    
//     manufacturerDD.addEventListener('change', function(e) {
//       if(e.target.value == '') {
//         resetSeries()
//         resetModel()
//         SearchBtn.setAttribute('disabled', true)
//       } else {
//         searchForSeries()
//         seriesDD.disabled = false
//       }
//     })

    
//     seriesDD.addEventListener('change', function(e) {
//       if(e.target.value == '') {
//         resetModel()
//         SearchBtn.disabled = true
//       } else {
//         searchForModels()
//         modelDD.disabled = false
//       }
//     })
    
//     modelDD.addEventListener('change', function(e) {
//       if(e.target.value == '') {
//         SearchBtn.disabled = true
//       } else {
//         SearchBtn.disabled = false 
//       }
//       searchForProduct()
//     })

//     SearchBtn.addEventListener('click', function() {
//       if(productUrl !== '') window.location.href = productUrl
//     })
// })

