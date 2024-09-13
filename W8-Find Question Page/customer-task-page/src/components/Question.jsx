import { useState } from "react";
import { Form, TextArea, Button, Header } from "semantic-ui-react";

const Question = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  return (
    <div>
      <Form>
        <Header as="h4">What do you want to ask or share?</Header>
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="Start your question with how, what, why, etc."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Describe your problem</label>
          <TextArea
            placeholder="Tell us more about the problem..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Tags</label>
          <input
            placeholder="Please add up to 3 tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" primary>
          POST
        </Button>
      </Form>
    </div>
  );
};

export default Question;
