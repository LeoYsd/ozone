import { Pane, Paragraph, Tab, Tablist } from "evergreen-ui";
import { useState } from "react";

const tabs = ['Owned', 'Listings', 'Favourited', 'Activity', 'More']

const OwnedPropertiesTab = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

return(
    <Pane height={120}>
    <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
      {tabs.map((tab, index) => (
        <Tab
          aria-controls={`panel-${tab}`}
          isSelected={index === selectedIndex}
          key={tab}
          onSelect={() => setSelectedIndex(index)}
        >
          {tab}
        </Tab>
      ))}
    </Tablist>
    <div className="my-4 border-[0.8px] border-white" />
    <Pane padding={16} background="#1E1A2F" flex="1">
      {tabs.map((tab, index) => (
        <Pane
          aria-labelledby={tab}
          aria-hidden={index !== selectedIndex}
          display={index === selectedIndex ? 'block' : 'none'}
          key={tab}
          role="tabpanel"
          className="font-gilroyMd text-[20px] text-rgba(255, 255, 255, 0.4)"
        >
          {/* <Paragraph>Panel {tab}</Paragraph> */}
        </Pane>
      ))}
    </Pane>
  </Pane>
);
      };

export default OwnedPropertiesTab;
