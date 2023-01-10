import React from 'react';
import { Collapse } from 'antd';

const Faq = () => {
    const { Panel } = Collapse;

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  function onChange(key) {
        console.log(key);
    }

    return (
        <div className='faq'> 
            <div className='container'>
                <h2>FAQ</h2>
                <Collapse defaultActiveKey={['1']} onChange={onChange}>
                    <Panel header="How to book?" key="Первая панель">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="What kit do I need?" key="Вторая панель">
                        <p>{text}</p>
                    </Panel>
                    <Panel header='What kind of accommodations I have?' key="Третья панель">
                        <p>{text}</p>
                        </Panel>
                        <Panel header="Water?" key="Четвертая панель панель">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="The trail is able to do by trekking?" key="Пятая панель">
                        <p>{text}</p>
                    </Panel>
                    <Panel header='Notes to know...' key="Шестая панель">
                        <Collapse>
                            <Panel header='This is panel header 6.1'>
                                <p>{text}</p>
                            </Panel>
                            <Panel header='This is panel header 6.2'>
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </Panel>
                </Collapse>

            </div>
            
        </div>
    );
};

export default Faq;