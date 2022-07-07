// Original: https://github.com/chenglou/react-motion/tree/master/demos/demo8-draggable-list
import { useRef } from 'react'
import Input from '@mui/material/Input';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Accordion from '../Accordion'
import EffectButton from '../EffectButton'
import InputField from '../../Component/InputField';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
const grid = 1;
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  // change background colour if dragging
  background: isDragging ? "linear-gradient(86deg, #f093fb 0%, #f5576c 100%)" : "linear-gradient(0deg, #f6d365 0%, #fda085 60%)",
  // styles we need to apply on draggables
  ...draggableStyle
});
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "linear-gradient(0deg, #f6d365 0%, #fda085 60%)",
  padding: grid,
  width: "100%",
});
function Draggables({ items, Handle }) {
  const inputRef = useRef();
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  const handleOnDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    const item = reorder(
      items,
      source.index,
      destination.index
    );
    let newData = item
    Handle.setPosition([...newData])
  }
  return (
    <div style={{ display: "flex" }}>
      <DragDropContext onDragEnd={handleOnDragEnd} >
        <Droppable droppableId="droppable1">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {
                items.map((data, questionIndex) => (
                  <Draggable draggableId={`${questionIndex}`} index={questionIndex} key={questionIndex}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <FormManage
                          inputRef={inputRef}
                          Handle={Handle}
                          items={items}
                          questionIndex={questionIndex}
                          data={data}
                          provided={provided}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div >
  )
}
function FormManage({ inputRef, Handle, items, questionIndex, data, provided }) {
  function TitleInput() {
    return <input
      onChange={(e) => Handle.setQuestionTitle(e.target.value, questionIndex)}
      onClick={(event) => event.stopPropagation()}//點選後不收折
      style={{ position: 'absolute', top: 0,  backgroundColor: 'transparent', borderWidth: 0,fontSize:'1.5rem' }}
      value={items[questionIndex].title}
      name={`Title`}
      id={`Title`}
      placeholder={`未命名的問題`}
      className="form-control form-control-lg form-control-solid"
    />
  }
  return (
    <Accordion
      draggablItem={true}
      onChangeExpand={Handle.onChangeExpand}
      index={questionIndex}
      data={data}
      title={TitleInput()}
      {...provided.dragHandleProps}>
      <Effect inputRef={inputRef} Handle={Handle} data={data} items={items} questionIndex={questionIndex} />
    </Accordion>
  )
}
function Effect({ inputRef, Handle, data, items, questionIndex }) {
  const onFocusNewField = () => {
    inputRef.current.select()
  }
  const typeRender = (data, questionIndex, selectionIndex) => {
    let label, shortAnswer;
    const handleChangeFieldValue = (value) => {
      Handle.handleChangeFieldValue(questionIndex, selectionIndex, value);
    };
    shortAnswer = "";
    switch (data.type) {
      case "field":
        label = `${selectionIndex + 1}.`;
        break;
      case "radio":
        label = <Radio disabled />;
        break;
      case "check":
        label = <Checkbox disabled />;
        break;
      case "shortAnswer":
        label = '';
        shortAnswer = "簡答文字";
        break;
      default:
        break;
    }
    return (
      <div className="form-group row" key={selectionIndex}>
        <InputField
          index={selectionIndex}
          label={label}
          inputRef={inputRef}
          values={shortAnswer || items[questionIndex].options[selectionIndex].content}
          handleChangeFieldValue={(value) => handleChangeFieldValue(value)}
          onDelete={() => Handle.onDelete(selectionIndex, 'answer', questionIndex)}
        />
      </div>
    );
  }
  return (
    <EffectButton
      visibleIndex={questionIndex}
      onDelete={() => Handle.onDelete(questionIndex, 'question')}
      onChangeFieldType={(type) => Handle.onChangeFieldType(questionIndex, type)}
      items={items}
      onInsertQuestion={Handle.onInsertQuestion}>
      {
        items[questionIndex].options?.map((data, selectionIndex) => typeRender(data, questionIndex, selectionIndex))
      }
      <div className="form-group row">
        <div className="col-lg-1 col-xl-1" />
        <div className="col-lg-11 col-xl-11">
          <Input
            sx={{
              mb: 5,
              width: '100%',
              display: data.options[0].type === 'shortAnswer' && 'none',
              fontSize:'2rem'
            }}
            variant="standard"
            placeholder={'點選輸新增欄位'}
            onFocus={async () => {
              await Handle.onInsertField(questionIndex);
              onFocusNewField();
            }}
          />
        </div>
      </div>
    </EffectButton>
  )
}
export default function DraggableList({ items, Handle }) {
  return (
    <Draggables items={items} Handle={Handle} />
  )
}