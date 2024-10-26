import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-right: 10px;
`;

const AddButton = styled.button`
  background-color: #4285f4;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #3367d6;
  }
`;

const OptionList = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const OptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ff4d4d;
  font-size: 20px;
  cursor: pointer;
`;

const WheelContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
`;

const Wheel = styled.svg`
  width: 100%;
  height: 100%;
  transform: ${props => `rotate(${props.rotation}deg)`};
  transition: transform 5s cubic-bezier(0.25, 0.1, 0.25, 1);
`;

const Segment = styled.path`
  fill: ${props => props.color};
  stroke: white;
  stroke-width: 2;
`;

const SegmentText = styled.text`
  font-size: ${props => props.fontSize}px;
  font-weight: bold;
  fill: black;
`;

const Pointer = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid black;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: #3367d6;
  }
`;

const ResetButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid #e0e0e0;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Result = styled.div`
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Encouragement = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-style: italic;
  text-align: center;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
`;

const colors = ['#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA', '#FFD8B3', '#E0BBE4', '#D4F0F0', '#FFC6FF'];

const encouragements = [
  "チャンスは準備している人にだけ訪れる。 - ルイ・パスツール",
  "人生に失敗がないと、人生を失敗する。 - 斎藤茂太",
  "決断瞬間を待っていては、永遠に決断できない。 - 坂本龍馬",
  "迷わず行けよ、行けばわかるさ。 - 坂本龍馬",
  "決断力とは、適切な時期に適切な行動をとる能力である。 - ディスレーリ",
  "決断こそが、すべての行動の基本である。 - ペトロニウス",
  "決断を下すのに完璧な時期というものはない。 - ロイ・ディズニー",
  "決断力は成功への第一歩である。 - パブロ・ピカソ",
  "決断を恐れるな。間違いを恐れよ。 - 松下幸之助",
  "決断は運命の分かれ道である。 - ハーヴェイ・マッケイ",
  "決断は未来への扉を開く鍵である。 - マックス・ルケード",
  "決断人生の岐路に立つ時にこそ重要だ。 - コンフキウス",
  "決断を先延ばにすることは、最悪の決断である。 - ジョン・F・ケネディ",
  "決断は、あなたの人生を変える力を持っている。 - トニー・ロビンス",
  "決断は、未来を創造する行為である。 - ピーター・ドラッカー",
  "決断には勇気が必要だが、その勇気が人生を変える。 - ノーマン・ビンセント・ピール",
  "決断の瞬間こそ、あなたの真価が問われる時だ。 - ジグ・グラー",
  "決断は、可能性の扉を開く。 - オプラ・ウィンフリー",
  "決断は、あなたの運命を左右する。 - アンソニー・ロビンス",
  "決断こそが、成功への近道である。 - ナポレオン・ヒル"
];

const ClearButton = styled(Button)`
  background-color: #ff4d4d;
  margin-bottom: 30px; // 30pxに増やしてスペースを確保
  &:hover {
    background-color: #ff3333;
  }
`;

const Notice = styled.p`
  color: #666;
  font-size: 14px;
  margin-top: 10px;
`;

const AppTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #4285f4;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
`;

const Darts = () => {
  const [options, setOptions] = useState([]);
  const [newOption, setNewOption] = useState('');
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState('');
  const [showEncouragement, setShowEncouragement] = useState(false);
  const [encouragement, setEncouragement] = useState('');

  const addOption = () => {
    if (newOption.trim() !== '' && options.length < 8) {
      setOptions([...options, newOption.trim().slice(0, 8)]);
      setNewOption('');
    }
  };

  const removeOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const clearOptions = () => {
    setOptions([]);
  };

  const spinWheel = () => {
    setShowEncouragement(false);
    const newRotation = Math.floor(Math.random() * 360) + 720 + rotation;
    setRotation(newRotation);
    setTimeout(() => {
      const selectedIndex = Math.floor(((360 - (newRotation % 360)) / (360 / options.length)));
      setResult(options[selectedIndex]);
      setEncouragement(encouragements[Math.floor(Math.random() * encouragements.length)]);
      setShowEncouragement(true);
    }, 5000);
  };

  const resetWheel = () => {
    setRotation(rotation + 360); // 1回転させてリセット
    setResult('');
    setShowEncouragement(false);
  };

  const getSegmentPath = (index, total) => {
    const angle = 360 / total;
    const startAngle = index * angle;
    const endAngle = (index + 1) * angle;
    const start = polarToCartesian(50, 50, 50, startAngle);
    const end = polarToCartesian(50, 50, 50, endAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return `M 50 50 L ${start.x} ${start.y} A 50 50 0 ${largeArcFlag} 1 ${end.x} ${end.y} Z`;
  };

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const wrapText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const getFontSize = (optionsLength) => {
    if (optionsLength <= 4) return 7;
    if (optionsLength <= 6) return 6;
    return 5;
  };

  const getTextPath = (index, total) => {
    const angle = 360 / total;
    const startAngle = index * angle;
    const endAngle = (index + 1) * angle;
    const midAngle = (startAngle + endAngle) / 2;
    const innerRadius = 20;
    const outerRadius = 45;
    const x1 = 50 + innerRadius * Math.cos((midAngle - 90) * Math.PI / 180);
    const y1 = 50 + innerRadius * Math.sin((midAngle - 90) * Math.PI / 180);
    const x2 = 50 + outerRadius * Math.cos((midAngle - 90) * Math.PI / 180);
    const y2 = 50 + outerRadius * Math.sin((midAngle - 90) * Math.PI / 180);
    return `M${x1},${y1} L${x2},${y2}`;
  };

  const splitText = (text) => {
    if (text.length <= 3) return [text];
    if (text.length <= 6) return [text.slice(0, 3), text.slice(3)];
    return [text.slice(0, 3), text.slice(3, 6), text.slice(6)];
  };

  return (
    <Container>
      <AppTitle>まよったときのアレ</AppTitle>
      <InputContainer>
        <Input
          type="text"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          placeholder="新しい選択肢を入力"
          maxLength={8}
        />
        <AddButton onClick={addOption} disabled={options.length >= 8}>追加</AddButton>
      </InputContainer>
      <Notice>※選択は8文字までです</Notice>
      <OptionList>
        {options.map((option, index) => (
          <OptionItem key={index}>
            {option}
            <DeleteButton onClick={() => removeOption(index)}>🗑️</DeleteButton>
          </OptionItem>
        ))}
      </OptionList>
      <ClearButton onClick={clearOptions}>全ての選択肢をクリア</ClearButton>
      <WheelContainer>
        <Wheel rotation={rotation} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill="white" />
          <defs>
            {options.map((_, index) => (
              <path
                key={`path-${index}`}
                id={`textPath-${index}`}
                d={getTextPath(index, options.length)}
              />
            ))}
          </defs>
          {options.map((option, index) => {
            const lines = splitText(option);
            return (
              <g key={index}>
                <Segment 
                  d={getSegmentPath(index, options.length)} 
                  color={colors[index % colors.length]}
                />
                <SegmentText fontSize={getFontSize(options.length)}>
                  <textPath
                    href={`#textPath-${index}`}
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    {lines[0]}
                    {lines[1] && <tspan x="0" dy="1.2em">{lines[1]}</tspan>}
                    {lines[2] && <tspan x="0" dy="1.2em">{lines[2]}</tspan>}
                  </textPath>
                </SegmentText>
              </g>
            );
          })}
        </Wheel>
        <Pointer />
      </WheelContainer>
      <div>
        <Button onClick={spinWheel}>運命を回す</Button>
        <ResetButton onClick={resetWheel}>↺ リセット</ResetButton>
      </div>
      <Result>{result && `結果: ${result}`}</Result>
      <Encouragement show={showEncouragement}>{encouragement}</Encouragement>
    </Container>
  );
};

export default Darts;
