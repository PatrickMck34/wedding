const express = require("express");
const { emptyQuery } = require("pg-protocol/dist/messages");
const { Error } = require("sequelize");
const {
  Provider
} = require("../../db/models");

const router = express.Router();
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { useSelector } = require("react-redux");


db = require("../../config/database");

router.post("/new", async (req, res) => {

  const {
    Party,
    Table,
    Guests,
    remainder,
    
  } = req.body;
  const provider = await Provider.create({
    Party,
    Table,
    Guests,
    remainder,
    
  });
  await provider.save();

  const providers = {
    Party,
    Table,
    Guests,
    remainder,
   
  };

  return res.status(201).json(providers);
});
router.put("/:providerId", restoreUser, async (req, res) => {

  const {
    id,
    Name,
    Address,
    City,
    State,
    Phone,
    zipCode,
    Email,
    webSite,
    Approved,
    domesticViolence,
    LGBTQ,
    crisisResources,
    humanTrafficking,
    military,
    lawEnforcement,
    elderSurvivor,
    childSurvivor,
    confidential,
    nonConfidential,
    healthCenter,
    dvProgram,
    psychProgram,
    callpolice,
    advocacyProgram,
    legalAdvice,
    forensicExams,
    generalHealth,
    pregnancy,
    housing,
    collegeOnCampus,
    title9,
    tribal,
    coalition,
    std,
    hivSupport,
    immigrants,
    blindDeaf,
    disabled,
    directCareCo,
    directCareMed,
    directCareOther,
    substanceAbuse,
    missingPersons,
    specialNeeds,
    alternativeCare,
  } = req.body;
  const provider = await Provider.findByPk(id)
  await provider.update({
    Name: Name,
    Address: Address,
    City: City,
    State: State,
    Phone: Phone,
    Email: Email,
    webSite: webSite,
    zipCode: zipCode,
    Approved: Approved,
    domesticViolence: domesticViolence,
    LGBTQ: LGBTQ,
    crisisResources: crisisResources,
    humanTrafficking: humanTrafficking,
    military: military,
    lawEnforcement: lawEnforcement,
    elderSurvivor: elderSurvivor,
    childSurvivor: childSurvivor,
    confidential: confidential,
    nonConfidential: nonConfidential,
    healthCenter: healthCenter,
    dvProgram: dvProgram,
    psychProgram: psychProgram,
    callpolice: callpolice,
    advocacyProgram: advocacyProgram,
    legalAdvice: legalAdvice,
    forensicExams: forensicExams,
    generalHealth: generalHealth,
    pregnancy: pregnancy,
    housing: housing,
    collegeOnCampus: collegeOnCampus,
    title9: title9,
    tribal: tribal,
    coalition: coalition,
    std: std,
    hivSupport: hivSupport,
    immigrants: immigrants,
    blindDeaf: blindDeaf,
    disabled: disabled,
    directCareCo: directCareCo,
    directCareMed: directCareMed,
    directCareOther: directCareOther,
    substanceAbuse: substanceAbuse,
    missingPersons: missingPersons,
    specialNeeds: specialNeeds,
    alternativeCare: alternativeCare,
  });



  provider.save()
  return res.status(201).json(provider);
});
router.get("/", async (req, res) => {
  // Parse the results from the headers
  const values = JSON.parse(req.headers['x-results']);

  // Fetch all providers
  const providers = await Provider.findAll();

  // For each provider, count the number of matching keys
  providers.forEach(provider => {
    let matchCount = 0;
    for (const key in values) {
      if (values[key] === true && provider[key] === true) {
        matchCount++;
      }
    }
    provider.dataValues.matchCount = matchCount;
  });

  // Filter the providers to only include those with at least one match
  const matchingProviders = providers.filter(provider => provider.dataValues.matchCount > 0);

  // Sort the providers based on the match count
  matchingProviders.sort((a, b) => b.dataValues.matchCount - a.dataValues.matchCount);

  return res.status(200).json(matchingProviders);
});
router.get("/all", async (req, res) => {

  const providers = await Provider.findAll();

  return res.status(200).json(providers);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id

  await Provider.destroy({
    where: {
      id: id,
    },
  });

  return res.json({ message: "Successfully Deleted", statusCode: 200 });
});

module.exports = router;