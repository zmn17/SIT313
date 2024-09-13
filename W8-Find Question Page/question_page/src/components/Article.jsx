import { useState } from "react";
import { db, storage } from "../utils/firebaseConf";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import {
  Form,
  TextArea,
  Button,
  Header,
  Segment,
  Container,
  Grid,
} from "semantic-ui-react";

const Article = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [abstract, setAbstract] = useState("");
  const [image, setImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handlePost = async (e) => {
    e.preventDefault();

    if (image) {
      const storageRef = ref(storage, `images/${image.name}`);

      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Error uploading image: ", error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          try {
            await addDoc(collection(db, "articles"), {
              title,
              description,
              abstract,
              tags,
              imageUrl: downloadURL,
              createdAt: new Date(),
            });
            alert("Article posted successfully with image!");
            setTitle("");
            setDescription("");
            setTags("");
            setAbstract("");
            setImage(null);
            setUploadProgress(0);
          } catch (error) {
            console.error("Error adding document: ", error);
          }
        },
      );
    } else {
      alert("Please upload an image!");
    }
  };

  return (
    <Container>
      <Grid centered>
        <Grid.Column computer={8} tablet={12} mobile={16}>
          <Segment padded="very">
            <Header as="h3" textAlign="center">
              Post an Article
            </Header>
            <Form onSubmit={handlePost}>
              <Form.Field>
                <label>Title</label>
                <input
                  placeholder="Enter a descriptive title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </Form.Field>
              <Form.Field>
                <label>Add Image</label>
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  accept="image/*"
                  required
                />
                {uploadProgress > 0 && (
                  <p>Upload progress: {Math.round(uploadProgress)}%</p>
                )}
              </Form.Field>
              <Form.Field>
                <label>Abstract</label>
                <input
                  placeholder="Enter a brief abstract"
                  value={abstract}
                  onChange={(e) => setAbstract(e.target.value)}
                  required
                />
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <TextArea
                  placeholder="Describe your article"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Form.Field>
              <Form.Field>
                <label>Tags</label>
                <input
                  placeholder="Add up to 3 tags, e.g., JavaScript, Firebase"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </Form.Field>
              <Button type="submit" primary fluid>
                Post
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Article;
