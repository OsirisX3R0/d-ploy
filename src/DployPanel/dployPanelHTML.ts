const dployPanelHTML = () => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>D-ploy</title>
    <style>
        label, input[type=text], select, textarea {
            width: 100%;
            color: #f5f5f5;
            outline: none;
            display: block;
        }

        input, select, textarea, button {
            background-color: #333;
            color: #f5f5f5;
            border: 2px solid #555;
            margin-bottom: 1rem;
            padding: .4rem;
        }

        textarea {
            height: 250px;
            resize: none;
        }

        input[type=radio] + label,
        label.radio {
            display: inline
        }

        .container {
            width: 625px;
            margin: auto;
        }
    </style>
</head>
<body>
    <h1>Create your D-ployment</h1>
    <div class="container">
        <label for="deployTo">Branch to deploy to</label>
        <input type="text" id="deployTo" name="deployTo" />

        <!--<label for="mergeType">Select merge type</label>-->
        <select type="text" id="mergeType" name="mergeType">
            <option>Select merge type</option>
            <option>Merge</option>
            <option>Fast-forward</option>
            <option>No Fast-forward</option>
            <option>Squash</option>
        </select>

        <label for="commitMessage">Commit message</label>
        <textarea type="text" id="commitMessage" name="commitMessage"></textarea>

        <label>Create tag?</label>
        <input type="radio" id="tagYes" name="createTag" value="true" />
        <label for="tagYes" class="radio">Yes</label>
        <input type="radio" id="tagNo" name="createTag" value="false" />
        <label for="tagNo" class="radio">No</label>

        <label for="tagName">Tag name</label>
        <input type="text" id="tagName" name="tagName" />

        <label for="tagMessage">Tag Message</label>
        <textarea type="text" id="tagMessage" name="tagMessage"></textarea>        

        <button>D-ploy!</button>
    </div>
</body>
</html>
`

export default dployPanelHTML