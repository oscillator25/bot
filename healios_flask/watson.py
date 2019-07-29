import json
from ibm_watson import NaturalLanguageUnderstandingV1
from ibm_watson.natural_language_understanding_v1 import (
    Features,
    EntitiesOptions,
    KeywordsOptions,
    EmotionOptions,
    SentimentOptions
)

natural_language_understanding = NaturalLanguageUnderstandingV1(
    version="2018-11-16",
    iam_apikey="rRVxTNpiEfRG2JmJjAoSnikDHi3mzO6ttkvQglnnc6mx",
    url="https://gateway-wdc.watsonplatform.net/natural-language-understanding/api",
)



def watson_nlp(doc):
    response = natural_language_understanding.analyze(
    text=doc,
    features=Features(
        #entities=EntitiesOptions(emotion=True, sentiment=True, limit=2),  
        #keywords=KeywordsOptions(emotion=True, sentiment=True, limit=5),  #incorporate dynamic text gradient coloring for keywords/phrases according to domininant emotion - stretch feature for demo
        emotion=EmotionOptions(document=True),
        sentiment=SentimentOptions(document=True)),
    ).get_result()
    
    return json.dumps(response, indent=2) 

