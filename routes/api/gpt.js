const express = require("express"); 
const router = express.Router();  
var openai = require('openai');
var ai = new openai({apiKey: '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'});

router.get('/',async (req,res) => {
  const completion = await ai.chat.completions.create({
    messages: [
        {"role": "user", "content": "내가 다음 음식 목록들을 줄 테니, 이 음식들을 대체할 만한 건강한 음식들을 각각 추천해줘. "}],
    model: "gpt-3.5-turbo",
  });

  res.send(console.log(completion.choices[0].message.content));
}
)

module.exports = router;