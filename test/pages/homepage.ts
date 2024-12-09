class HomePage {

     get pageHeader() { 
        return $("h1[class='sc-4555ca6a-0 iqElAM']");
    }

    get subHeading() {
        return $("//p[@class='sc-5159831f-0 sc-b0fbbdb9-2 tSOdx bMOyxW']//parent::div[@class='sc-ace17a57-0 dMCehp']");
    }
}

module.exports = new HomePage();