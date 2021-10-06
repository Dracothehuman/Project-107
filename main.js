function sounds()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/8LZC512lP/model.json", modalReady)
}
function modalReady()
{
    classifier.classify(gotResult);
}
