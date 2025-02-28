console.log("relewise script starts");
document.addEventListener("DOMContentLoaded", async function () {
    const { Searcher, UserFactory, ProductSearchBuilder } = window.Relewise;
console.log("relewise script loaded");
    // Initialize Relewise Searcher with API Key
    const searcher = new Searcher('c71c0a02-7a12-4d5e-a81b-b01ee11ab47c', 'cSVFwyYFg=yU_!6', {
        serverUrl: 'https://sandbox-api.relewise.com/',
    });

    // Search settings
    const settings = {
        language: 'en',
        currency: 'EUR',
        displayedAtLocation: 'HomePage',
        user: UserFactory.anonymous(),
    };

    // Configure Faceted Search
    const builder = new ProductSearchBuilder(settings)
        .setSelectedProductProperties({
            displayName: true,
            pricing: true,
            allData: true,
            // dataKeys: ['Url', 'ShortDescription', 'ImageUrls'],
        })
        // .setTerm('') // Example: Search for shoes
        // .pagination(p => p
        //     .setPageSize(30)
        //     .setPage(1))
        // .facets(f => f
        //     .addBrandFacet() // Brand filter
        //     .addSalesPriceRangeFacet('Product') // Price range filter
        //     .addVariantSpecificationFacet('Size') // Size filter
        // );

    const searchRequest = builder.build();

    try {
        // Fetch Faceted Search Data
        const response = await searcher.searchProducts(searchRequest);
        console.log("Faceted Data:", response.facets);

        // TODO: Use response data to render filters dynamically on your Shopify store
    } catch (error) {
        console.error('Relewise API Error:', error);
    }
});
