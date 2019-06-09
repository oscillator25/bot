import json
from ibm_watson import NaturalLanguageUnderstandingV1
from ibm_watson.natural_language_understanding_v1 import (
    Features,
    EntitiesOptions,
    KeywordsOptions,
)

natural_language_understanding = NaturalLanguageUnderstandingV1(
    version="2018-11-16",
    iam_apikey="wrSPdAvw2f00HR0RrzDePmEbbqKckfMOwZuJiMwWk9sW",
    url="https://gateway.watsonplatform.net/natural-language-understanding/api",
)

response = natural_language_understanding.analyze(
    text="We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.",
    # "We have no water or are food and my children are starving and very unhappy and stressed.. please help us."
    # "We can't wait that much longer",
    features=Features(
        entities=EntitiesOptions(emotion=True, sentiment=True, limit=2),
        keywords=KeywordsOptions(emotion=True, sentiment=True, limit=2),
    ),
).get_result()

print(json.dumps(response, indent=2))
