import { useState } from "react";
import { Form, TextArea, Button, Header } from "semantic-ui-react";

const Article = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [abstract, setAbstract] = useState("");

  return (
    <div>
      <Form>
        <Header as="h4">What do you want to ask or share?</Header>
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="Enter a descriptive title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Abstract</label>
          <input
            placeholder="Enter a brief abstract"
            value={abstract}
            onChange={(e) => setAbstract(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Describe your article</label>
          <TextArea
            placeholder="Tell us more about the article..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Tags</label>
          <input
            placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
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

export default Article;
