function combineParagraph() {
    // 사용자가 입력한 텍스트를 가져옵니다.
    const userInput = document.getElementById("textInput").value;

    // 입력값이 비어있을 경우 처리
    if (userInput.trim() === "") {
        alert("텍스트를 입력하세요.");
        return;
    }

    // 텍스트를 줄바꿈 문자(\n)를 기준으로 분리합니다.
    const lines = userInput.split("\n");

    // "V" 문자가 있는 경우 줄바꿈을 유지하고, 그렇지 않은 경우는 공백으로 치환합니다.
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes("V")) {
            lines[i] += "\n";
        } else {
            lines[i] = lines[i].trim();
        }
    }

    // 결과를 화면에 표시합니다.
    document.getElementById("result").innerText = lines.join(" ");
}
